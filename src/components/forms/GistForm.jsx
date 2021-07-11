import React, { useCallback, useMemo, useRef } from 'react';
import {
  useForm, useFieldArray, useFormContext, FormProvider,
} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import Toggle from 'react-toggle';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useIntl } from 'react-intl';

import Input from './Input';
import Button from './Button';

import getConfig from '../../utils/config';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-toggle/style.css';

import './GistForm.scss';

const { api } = getConfig();

const LineItem = ({
  techniques, paints, index, removeStep,
}) => {
  const ref = useRef();

  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: `steps.${index}.paints`, control });

  const handleTypeaheadChange = ({ 0: paint }) => {
    ref.current.clear();
    if (!paint) return;
    append({
      id: paint.id, paintId: paint.id, label: paint.label, ratio: '1',
    });
  };

  const handleRemovePaint = (paintIndex) => {
    remove(paintIndex);
  };

  const paintOptions = useMemo(() => paints.map((paint) => ({ id: paint.id, label: paint.name })));

  return (
    <div className="gist-form-line-item">
      <div className="row">
        <div className="col-sm-12">
          <h5 className="gist-form-line-item__title">{`Step ${index + 1}`}</h5>
        </div>
        <div className="col-sm-2">
          <select className="form-select" {...register(`steps.${index}.techniqueId`)}>
            <option>Select Technique</option>
            {techniques.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
          </select>
        </div>
        <div className="col-sm-10">
          <Input placeholder="describe step" {...register(`steps.${index}.description`)} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Typeahead
            onChange={handleTypeaheadChange}
            options={paintOptions}
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
                <Input {...register(`steps.${index}.paints.${paintIndex}.id`)} hidden />
              </div>
              <div className="col-sm-3">
                <Input appendLabel="parts" {...register(`steps.${index}.paints.${paintIndex}.ratio`)} defaultValue={paint.ratio} />
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
  const history = useHistory();
  const intl = useIntl();

  const onSubmit = useCallback(async (values) => {
    try {
      await axios.post(`${api}/gists`, values, { withCredentials: true });

      history.push('/dashboard');
    } catch (e) {
      console.log(e);
    }
  }, []);

  const methods = useForm();
  const {
    register, handleSubmit, control, setValue,
  } = methods;
  const { fields, append, remove } = useFieldArray({ name: 'steps', control });

  const handleAdd = () => append();
  const handleRemove = (index) => {
    remove(index);
  };

  const handlePrivateToggle = (ev) => {
    setValue('private', ev.target.checked);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-sm-6">
            <Input label="Title" {...register('title')} />
            <Input label="Model Name" {...register('modelName')} />
            <div className="form-group">
              <select className="form-control" {...register('difficulty')}>
                <option>easy</option>
                <option>intermediate</option>
                <option>difficult</option>
              </select>
            </div>
            <label>
              <Toggle
                onChange={handlePrivateToggle}
              />
              <span>{intl.formatMessage({ id: 'PRIVATE' })}</span>
            </label>

          </div>
        </div>
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
