export enum PracticeFields {
    ID = 'id',
    DISCIPLINE_CODE = 'discipline_code',
    TITLE = 'title',
    YEAR = 'year',
    AUTHORS = 'authors',
    OP_LEADER = 'op_leader',
    LANGUAGE = "language",
    QUALIFICATION = "qualification",
    KIND_OF_PRACTICE = "kind_of_practice",
    TYPE_OF_PRACTICE = "type_of_practice",
    WAY_OF_DOING_PRACTICE = "way_of_doing_practice",
    FORMAT_PRACTICE = "format_practice",
    FEATURES_CONTENT_AND_INTERNSHIP = "features_content_and_internship",
    ADDITIONAL_REPORTING_MATERIALS = "additional_reporting_materials",
    FORM_OF_CERTIFICATION_TOOLS = "form_of_certification_tools",
    PASSED_GREAT_MARK = "passed_great_mark",
    PASSED_GOOD_MARK = "passed_good_mark",
    PASSED_SATISFACTORILY_MARK = "passed_satisfactorily_mark",
    NOT_PASSED_MARK = "not_passed_mark",
    STRUCTURAL_UNIT = "structural_unit",
    BIBLIOGRAPHIC_REFERENCE = "bibliographic_reference",
}

export enum StructuralUnitFields {
    ID = "id",
    TITLE = "title",
    ISU_ID = "isu_id",
}

export enum PracticeStepsRussian {
    GENERAL = 'Главное',
    FEATURES = 'Особенности',
    ASSESSMENT = 'Оценка',
    REFERENCES = 'Источники',
}

export const PracticeStepsRussianList = Object.entries(PracticeStepsRussian).map(([, value]) => value);

export enum Languages {
    RUSSIAN = 'ru',
    ENGLISH = 'en',
    KAZAKH = 'kz',
    GERMAN = 'de',
    RUSSIAN_ENGLISH = 'ru/en',
}

export enum Qualifications {
    PRIMARY_VOCATIONAL_EDUCATION = 'primary_vocational_education',
    SECONDARY_VOCATIONAL_EDUCATION = 'secondary_vocational_education',
    BACHELOR = 'bachelor',
    SPECIALIST = 'specialist',
    MASTER = 'master',
    ALL_LEVELS = 'All_levels',
}

export enum PracticeKinds {
    EDUCATIONAL = 'educational',
    PRODUCTION = 'production',
}

export enum PracticeTypes {
    INTRO = 'intro',
    STD_INTRO = 'std-intro',
    TECH = 'tech',
    CONSTR = 'constr',
    SCI_RES = 'sci-res',
    SCI_RES_WORK = 'sci-res-work',
    CONS_EXP = 'cons-exp',
    RES_INTER = 'res-inter',
    ORG_CONTR = 'org-contr',
    SCI_PED = 'sci_ped',
    EXP_RES = 'exp-res',
    PROJ_CONSTR = 'proj-constr',
    TECH_PROJ_INTER = 'tech-proj-inter',
    PROD_TECH = 'prod-tech',
    IND_TECH = 'ind-tech',
    TEH_PROJ_TECH_INTET = 'teh-proj-tech-intet',
    TECH_PROJ_TECH = 'tech-proj-tech',
    SENIOR_INTER = 'senior-inter',
    INTER = 'inter',
}

export enum PracticeWays {
    STATIONARY = 'stationary',
    EXTERNAL = 'external',
    STATIONARY_EXTERNAL = 'stationary-external',
}

export enum PracticeFormats {
    DEDICATED = 'dedicated',
    DISPERSED = 'dispersed',
}

export enum fetchingTypes {
    GET_PRACTICE = 'GET_PRACTICE',
    GET_TEMPLATE_TEXT = 'GET_TEMPLATE_TEXT',

    GET_PRACTICE_LIST = 'GET_PRACTICE_LIST',
}