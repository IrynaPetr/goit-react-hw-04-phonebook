import { Input, FilterContainer, Text } from "./Filter.styled";
import PropTypes from "prop-types";

export default function Filter({ value, changeFilter }) {
  return (
    <FilterContainer>
      <Text>Find contacts by name</Text>
      <Input
      text="text"
      name="filter"
      value={value}
      onChange={changeFilter}
      placeholder="Name"/>
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};