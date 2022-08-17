import React from 'react';
import './FilterForm.css';

type Props = {};

export const FilterForm = (props: Props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const value = inputRef.current.value;
    // const option = selectRef.current.value;
    // if(!value.trim()) return;
    // return navigate(`/filter/${option}/${value}`)
  };
  return (
    <div className="filter_form" title="Enter to filter">
      <form>
        <div>
          <input type="text" placeholder="0" required />

          <select>
            <option value="lt" title="lesser than">
              LT
            </option>
            <option value="lte" title="lesser than or equal">
              LTE
            </option>
            <option value="gt" title="greater than">
              GT
            </option>
            <option value="gte" title="greater than or equal">
              GTE
            </option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
