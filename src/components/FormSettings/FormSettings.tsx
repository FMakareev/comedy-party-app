import React from 'react';
import {Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import {FORM_ERROR} from "final-form";
import {FinalOnSubmit, Player} from "../../types";
import {GameConfig} from "../../store/game-state/reducer";
import {FormSettingsRender} from "../FormSettingsRender/FormSettingsRender";


export type FormSettingsValues = {
  players: Player[];
  gameConfig: GameConfig;
}

const validate = (values: FormSettingsValues) => {
  const errors: any = {};
  if (values.players.length === 0) {
    errors[FORM_ERROR] = `Мне жаль, но вы должны добавить еще одного игрока.`
  }
  return errors;
}

type Props = {
  onClickBack(): void;
  initialValues: FormSettingsValues;
  onSubmit: FinalOnSubmit<FormSettingsValues, any>;
}

export const FormSettings: React.FC<Props> = (
  {
    onClickBack,
    initialValues,
    onSubmit,
  }
) => (
  <Form
    <FormSettingsValues>
    validate={validate}
    initialValues={initialValues}
    initialValuesEqual={() => true}
    mutators={{
      ...arrayMutators
    }}
    onSubmit={onSubmit}
    render={FormSettingsRender<FormSettingsValues>({
      onClickBack,
    })}
  />
);
