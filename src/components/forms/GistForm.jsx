import React, { useCallback, useRef } from 'react';
import {
  useForm, useFieldArray, useFormContext, FormProvider,
} from 'react-hook-form';
import { Typeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import './GistForm.scss';

const LineItem = ({
  techniques, paints, index, removeStep,
}) => {
  const ref = useRef();

  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: `gist-step.${index}.paint`, control });

  const handleTypeaheadChange = ({ 0: paint }) => {
    ref.current.clear();
    if (!paint) return;

    append({ id: paint.id, label: paint.label, ratio: '1' });
    // setPaints([...paints, paint]);
  };

  const handleRemovePaint = (paintIndex) => {
    remove(paintIndex);
  };

  return (
    <div className="gist-form-line-item">
      <div className="row">
        <div className="col-sm-12">
          <h5 className="gist-form-line-item__title">{`Step ${index + 1}`}</h5>
        </div>
        <div className="col-sm-2">
          <select className="form-select" {...register(`gist-step.${index}.technique`)}>
            <option>Select Technique</option>
            {techniques.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
          </select>
        </div>
        <div className="col-sm-10">
          <Input placeholder="describe step" {...register(`gist-step.${index}.description`)} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Typeahead
            onChange={handleTypeaheadChange}
            options={paints}
            ref={ref}
            placeholder="search paints"
          />
          <Button design="link" text="Remove this step" onClick={removeStep} />
        </div>
        <div className="col-sm-8">
          {fields.map((paint, paintIndex) => (
            <div className="row">
              <div className="col-sm-3">
                <Input value={paint.label} disabled />
                <Input {...register(`gist-step.${index}.paint.${paintIndex}.id`)} hidden />
              </div>
              <div className="col-sm-3">
                <Input appendLabel="parts" {...register(`gist-step.${index}.paint.${paintIndex}.ratio`)} defaultValue={paint.ratio} />
              </div>
              <div className="col-sm-6">
                <Button text="Remove" design="link" onClick={() => handleRemovePaint(paintIndex)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

LineItem.propTypes = {
  techniques: PropTypes.arrayOf(PropTypes.object).isRequired,
  paints: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  removeStep: PropTypes.func.isRequired,
};

const GistForm = ({ techniques, paints }) => {
  const onSubmit = useCallback((values) => console.log(values), []);

  const methods = useForm();
  const { register, handleSubmit, control } = methods;
  const { fields, append, remove } = useFieldArray({ name: 'gist-step', control });

  const handleAdd = () => append();
  const handleRemove = (index) => remove(index);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Model Name" {...register('modelName')} />
        <div className="gist-form__steps">
          { fields.map((field, index) => <LineItem techniques={techniques} paints={paints} index={index} removeStep={() => handleRemove(index)} />) }
        </div>
        <Button design="success" text="Add Step" onClick={handleAdd} />
        <hr />

        <div className="gist-form__controls">
          <Button type="submit" text="Save Gist" />
        </div>

        
      </form>
    </FormProvider>
  );
};

GistForm.propTypes = {
  techniques: PropTypes.arrayOf(PropTypes.object),
  paints: PropTypes.arrayOf(PropTypes.object),
};

GistForm.defaultProps = {
  techniques: [],
  paints: [],
};

export default GistForm;
