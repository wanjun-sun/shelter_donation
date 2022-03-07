import React from "react";
import {
    DropdownWrapper,
    StyledSelect,
    StyledOption,
  } from "./shelter-dropdown.styles";

export function Dropdown(props) {
    return (
      <DropdownWrapper action={props.action}>
        <StyledSelect id="services" name="services">
          {props.children}
        </StyledSelect>   
      </DropdownWrapper>
    );
  }
  
export function Option(props) {
    return (
        <StyledOption selected={props.selected}>
         {props.value}
        </StyledOption>
    );
}