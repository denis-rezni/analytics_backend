import {WithStyles} from "@material-ui/core";
import styles from "./styles";
import {CertificationActions, CertificationState} from "../../types";
import {CertificationFields} from "../../enum";
import React from "react";
import connect from "./connect";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import get from "lodash/get";
import {RussianCertificationFields} from "../../constants";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";

interface InputListProps extends WithStyles<typeof styles> {
    actions: CertificationActions;
    fieldName: CertificationFields;
    fields: CertificationState;
}

type InputListState = {
    textList: Array<string>,
    currentText: string,
}

class InputList extends React.Component<InputListProps> {

    DELIMITER = "|`|"

    state: InputListState = {
        textList: [],
        currentText: '',
    }

    componentDidMount() {
        this.setTextList((this.props.fields[this.props.fieldName]) as string);
    }

    setTextList = (text: string) => {
        if (!text) return;
        const textList = text.split(this.DELIMITER);
        this.setState({
            ...this.state,
            textList: textList,
        })
    }

    setInput = (e: React.ChangeEvent) => {
        const currentText = get(e, 'target.value')

        this.setState({
            ...this.state,
            currentText,
        })
    }

    handleDelete = (index: number) => () => {
        const newList = this.state.textList.filter((item, ind) => ind !== index);
        this.setState({
            ...this.state,
            textList: newList,
        });
        this.saveField(newList);
    }

    saveField = (textList: Array<string>) => {
        const value = textList.join(this.DELIMITER);
        console.log('saving value: ' + value);
        this.props.actions.saveField({field: this.props.fieldName, value});
    }

    addToList = () => {
        const value = this.state.currentText;
        if (!value) return;
        const newList = this.state.textList.concat([value]);
        this.setState({
            ...this.state,
            textList: newList,
            currentText: '',
        });
        this.saveField(newList);
    }

    onKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.addToList();
        }
    }


    render() {
        const {fieldName, classes} = this.props as any;
        const {textList, currentText} = this.state;

        return (
            <div className={classes.root}>
                {
                    textList.map((text, index) => (
                        <div className={classes.item}>
                            <Typography className={classes.title}>
                                {text}
                            </Typography>
                            <div className={classes.actions}>
                                <IconButton onClick={this.handleDelete(index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </div>
                        </div>
                    ))
                }
                <div className={classes.input}>
                    <TextField label={(RussianCertificationFields as any)[fieldName]}
                               onBlur={this.addToList}
                               onChange={this.setInput}
                               onKeyPress={this.onKeyPress}
                               variant="outlined"
                               value={currentText}
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               style={{width: '100%'}}
                    />
                </div>
            </div>
        );
    }
}

export default connect(withStyles(styles)(InputList));