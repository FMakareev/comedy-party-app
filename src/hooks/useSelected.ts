import React from "react";
import {isEqual} from 'lodash';
import {Maybe} from "../types";

type Props = {
  isMultipleSelect?: boolean;
}

type ReturnType<TItem> = {
  selected: Maybe<TItem> | Maybe<TItem[]>;
  onSelect: (player: TItem) => void;
  onReset: () => void;
}

export const useSelected = <TItem>({isMultipleSelect}: Props = {}): ReturnType<TItem> => {
  const [selected, setState] = React.useState<Maybe<TItem> | Maybe<TItem[]>>(isMultipleSelect ? [] : null);

  const onSelect = (item: TItem): void => {

    if (isMultipleSelect) {
      if (Array.isArray(selected)) {
        if (selected.findIndex((select) => isEqual(select, item)) !== -1) {
          setState([...selected].filter((select) => !isEqual(select, item)))
        } else {
          setState([
            ...selected,
            item,
          ])
        }
      } else {
        setState([]);
      }
    } else {
      if (isEqual(selected, item)) {
        setState(null)
      } else {
        setState(item);
      }
    }
  }

  const onReset = () => isMultipleSelect ? setState([]) : setState(null);

  return {
    onSelect,
    onReset,
    selected,
  }

}
