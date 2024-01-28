import React, { FC } from "react";
import "./styles.scss";
import FormInput from "../FormInput/FormInput";
import Buttons from "../Buttons/Buttons";
import ToggleButton from "../ToggleButton/ToggleButton";

const SearchComponent: FC = () => {
  return (
    <div className="containerSearch">
      <div className="searchContainerInput">
        <FormInput
          style={"searchInput"}
          placeholder="Какую работу вы ищете?"
          value={undefined}
          onChange={function (
            value: string,
            isChecked?: boolean | undefined
          ): void {
            throw new Error("Function not implemented.");
          }}
          subInput={undefined}
          required={false}
          error={""}
          keyData={""}
        ></FormInput>
        <ToggleButton
          onToggle={() => {}}
          text={"Ищу стажировку"}
          formDataKey={""}
          checked={undefined}
          styleContainer={"toggleSearch"}
        />
      </div>
      <Buttons
        text={"Найти"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        className="btnOrange"
      />
    </div>
  );
};

export default SearchComponent;
