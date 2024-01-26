import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {
    FormButton,
    FormInputStyle,
    FormLabel,
    FormStyle,
    StyledErrorMessage,
} from './ContactForm.styled';

const nameId = nanoid();
const numberId = nanoid();

const validationSchema = yup.object({
    name: yup.string().max(32).required(),
    number: yup.string().min(6).max(12).required(),
});

const initialValues = {
    name: '',
    number: '',
};

const ContactForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            onSubmit(values);
            resetForm();
        },
        validationSchema,
    });

    return (
        <FormStyle onSubmit={formik.handleSubmit}>
            <FormLabel htmlFor={nameId}>
                Name:
                <FormInputStyle
                    type="text"
                    name="name"
                    id={nameId}
                    autoComplete="on"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name ? <StyledErrorMessage>{formik.errors.name}</StyledErrorMessage> : null}
            </FormLabel>
            <FormLabel htmlFor={numberId}>
                Number:
                <FormInputStyle
                    type="text"
                    name="number"
                    id={numberId}
                    autoComplete="on"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                />
                {formik.errors.number ? (
                    <StyledErrorMessage>{formik.errors.number}</StyledErrorMessage>
                ) : null}
            </FormLabel>

            <FormButton type="submit">Add contact</FormButton>
        </FormStyle>
    );
};

export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    nameId: PropTypes.string,
    numberId: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};
