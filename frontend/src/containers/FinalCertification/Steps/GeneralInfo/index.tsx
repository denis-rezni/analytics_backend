import React from "react";
import {CertificationFields, CertificationStepsRussian} from "../../enum";
import connect from "./connect";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import {Typography, WithStyles} from "@material-ui/core";
import {CertificationActions, CertificationState} from "../../types";
import Input from "../../components/Input";
import SearchSelector from "../../../../components/SearchSelector/SearchSelector";
import {SelectorListType} from "../../../../components/SearchSelector/types";
import {StructuralUnitsActions} from "../../../StructuralUnits/types";

interface GeneralInfoProps extends WithStyles<typeof styles> {
    actions: CertificationActions;
    fields: CertificationState;
    structuralUnitsList: SelectorListType;
    structuralUnitActions: StructuralUnitsActions;
}

class GeneralInfo extends React.Component<GeneralInfoProps> {

    componentDidMount() {
        // this.props.structuralUnitActions.getStructuralUnits();
    }

    handleChangeStructuralUnitSearchText = (search: string) => {
        this.props.structuralUnitActions.changeSearchQuery(search);
        this.props.structuralUnitActions.getStructuralUnits();
    }

    changeStructuralUnit = (value: string) => {
        this.props.actions.saveField({field: CertificationFields.STRUCTURAL_UNIT, value})
    }

    render() {

        const {classes, structuralUnitsList, fields} = this.props;

        return (
            <div className={classes.content}>
                <Typography variant='h5'>
                    {CertificationStepsRussian.GENERAL}
                </Typography>
                <div className={classes.columns}>
                    <div>
                        <Input label='Название' fieldName={CertificationFields.TITLE}/>
                        <Input label='Год проведения' fieldName={CertificationFields.YEAR}/>
                        <Input label='Руководитель образовательной программы' fieldName={CertificationFields.OP_LEADER}/>
                    </div>
                    <div className={classes.rightColumn}>
                        <Input label='Авторский состав' fieldName={CertificationFields.AUTHORS}/>
                        <SearchSelector label="Структурное подразделение"
                                        changeSearchText={this.handleChangeStructuralUnitSearchText}
                                        list={structuralUnitsList}
                                        className={classes.input}
                                        changeItem={this.changeStructuralUnit}
                                        value={String(fields[CertificationFields.STRUCTURAL_UNIT]?.id)}
                                        valueLabel={fields[CertificationFields.STRUCTURAL_UNIT]?.title ?? ''}
                        />
                        <Input label='Другие нормативные документы' fieldName={CertificationFields.GENERAL_PROVISIONS_OTHER_DOCUMENTS}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(withStyles(styles)(GeneralInfo));