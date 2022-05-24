import {PracticeFields} from "./enum";

export type Error = {
    message: string;
} | null

const presence = {
    message: 'Поле обязательно для заполнения',
}

const number = {
    message: 'Введите число',
}

const validationRules = {
    [PracticeFields.TITLE]: {
        presence,
    },
    [PracticeFields.AUTHORS]: {
        presence,
    },
    [PracticeFields.OP_LEADER]: {
        presence,
    },
    [PracticeFields.YEAR]: {
        presence,
        year: {
            min: 1990,
            max: 2030,
            message: 'Введите год между 1990 и 2030',
        }
    },
    [PracticeFields.DISCIPLINE_CODE]: {
        presence,
        number,
    },
    [PracticeFields.LANGUAGE]: {
        presence,
    },
    [PracticeFields.QUALIFICATION]: {
        presence,
    },
    [PracticeFields.FORMAT_PRACTICE]: {
        presence,
    },
    [PracticeFields.KIND_OF_PRACTICE]: {
        presence,
    },
    [PracticeFields.TYPE_OF_PRACTICE]: {
        presence,
    },
    [PracticeFields.WAY_OF_DOING_PRACTICE]: {
        presence,
    },
    [PracticeFields.FORM_OF_CERTIFICATION_TOOLS]: {
        presence,
    },
    [PracticeFields.PASSED_GREAT_MARK]: {
        presence,
    },
    [PracticeFields.PASSED_GOOD_MARK]: {
        presence,
    },
    [PracticeFields.PASSED_SATISFACTORILY_MARK]: {
        presence,
    },
    [PracticeFields.NOT_PASSED_MARK]: {
        presence,
    },
} as any;

const validateNumber = (value: string) => {
    if (Number.isNaN(Number(value)) || !Number.isInteger(Number(value))) {
        return number;
    }
}

export const validate = (field: PracticeFields, value: any): Error => {
    const rules = validationRules[field];
    if (!rules) return null;

    if (rules.presence) {
        if (!value) {
            return {
                message: presence.message,
            };
        }
    }

    if (rules.year) {
        const err = validateNumber(value);
        if (err) return err;

        const regex = /^[1-9]\d{3}$/
        if (!regex.test(value)) {
            return {
                message: rules.year.message,
            }
        }
        const num = Number(value);
        const min = rules.year.min;
        const max = rules.year.max;
        if (!Number.isInteger(num) || num < min || num > max) {
            return {
                message: rules.year.message,
            }
        }
    }

    if (rules.number) {
        const err = validateNumber(value);
        if (err) return err;
    }

    return null;
}

export const getErroredFields = (state: any) => {
    const erroredFields = [];
    for (const [,field] of Object.entries(PracticeFields)) {
        const value = state[field];
        const error = validate(field, value);
        if (error) {
            erroredFields.push(field);
        }
    }
    return erroredFields;
}