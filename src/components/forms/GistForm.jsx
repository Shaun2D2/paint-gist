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
  techniques, paints, index, removeStep, defaultValues = {},
}) => {
  const ref = useRef();
  const intl = useIntl();

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
        <div className="col-sm-6">
          <div className="form-group">
            <label className="form-label">Technique</label>
            <select className="form-select" {...register(`steps.${index}.techniqueId`)}>
              {techniques.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
            </select>
          </div>
          <Input label="Description" defaultValue={defaultValues.description} placeholder={intl.formatMessage({ id: 'FORM_DESCRIBE_STEP' })} name={`steps.${index}.description`} />
          <div className="form-group">
            <label className="form-label">Paints</label>
            <Typeahead
              onChange={handleTypeaheadChange}
              options={paintOptions}
              ref={ref}
              placeholder={intl.formatMessage({ id: 'FORM_SEARCH_PAINT' })}
            />
          </div>
          {fields.map((paint, paintIndex) => (
            <div className="row">
              <div className="col-sm-6">
                {paint.label}
              </div>
              <div className="col-sm-4">
                <Input appendLabel={intl.formatMessage({ id: 'FORM_RATIO_PARTS' })} name={`steps.${index}.paints.${paintIndex}.ratio`} defaultValue={paint.ratio} />
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Button design="link" text={intl.formatMessage({ id: 'FORM_REMOVE_STEP' })} onClick={removeStep} />
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

const GistForm = ({ techniques, paints, defaultValues }) => {
  const history = useHistory();
  const intl = useIntl();

  const onSubmit = useCallback(async (values) => {
    try {
      console.log(values);
      // await axios.post(`${api}/gists`, values, { withCredentials: true });

      // history.push('/dashboard');
    } catch (e) {
      console.log(e);
    }
  }, []);

  const methods = useForm({
    defaultValues,
  });

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
            <Input label={intl.formatMessage({ id: 'FORM_TITLE' })} name="title" />
            <Input label={intl.formatMessage({ id: 'FORM_MODEL_TITLE' })} name="modelName" />
            {/* <div className="form-group">
              <select className="form-control" {...register('difficulty')}>
                <option>easy</option>
                <option>intermediate</option>
                <option>difficult</option>
              </select>
            </div> */}
            {/* <label>
              <Toggle
                onChange={handlePrivateToggle}
              />
              <span>{intl.formatMessage({ id: 'PRIVATE' })}</span>
            </label> */}

          </div>
        </div>
        <div className="gist-form__steps">
          { fields.map((field, index) => (
            <LineItem
              key={field.id}
              techniques={techniques}
              paints={paints}
              index={index}
              removeStep={() => handleRemove(index)}
              defaultValues={defaultValues}
            />
          ))}
        </div>
        <Button design="success" text={intl.formatMessage({ id: 'FORM_ADD_STEP' })} onClick={handleAdd} />
        <hr />

        <div className="gist-form__controls">
          <Button type="submit" text={intl.formatMessage({ id: 'FORM_SAVE' })} />
        </div>
      </form>
    </FormProvider>
  );
};

GistForm.propTypes = {
  techniques: PropTypes.arrayOf(PropTypes.object),
  paints: PropTypes.arrayOf(PropTypes.object),
  defaultValues: PropTypes.shape({}),
};

GistForm.defaultProps = {
  techniques: [],
  paints: [],
  defaultValues: {},
};

export default GistForm;
