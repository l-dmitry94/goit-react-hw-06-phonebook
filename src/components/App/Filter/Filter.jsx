import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormInput, FormLabel } from '../ContactForm/ContactForm.styled';


const Filter = ({ value, onChange }) => {
    const filterId = nanoid();

    return (
        <FormLabel htmlFor={filterId}>
            Find contacts by name
            <FormInput
                id={filterId}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </FormLabel>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
