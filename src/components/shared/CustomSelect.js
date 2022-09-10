import React, { Fragment  } from "react"
import Select, { components } from "react-select";

const Option = (props) => {
    return (
        <Fragment>
            <components.Option {...props}>{props.children}</components.Option>
        </Fragment>
    );
};

const CustomSelect = ({  options, onChange }) => {
    return (
      <div>
        <Select
            value=""
            multiple={true}
            options={options}
            components={{ Option }}
            onChange={onChange}
            placeholder="Add Fields"
            closeMenuOnSelect={false}
        />
      </div>
    );
  };

export { CustomSelect };