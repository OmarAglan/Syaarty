import {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
}

export interface SearchManfuacturerPrpos {
    manfuacturer: string;
    setManfuacturer: (manfuacturer: string) => void;
}