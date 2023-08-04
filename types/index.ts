import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean
}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void
}

export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: string;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps{
    manufacturer: string;
    model: string;
    fuel: number;
    limit: number;
    year: number;
}

interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps{
    title: string;
    options: OptionProps[]
    setFilter: (param: any) => void
}

export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
    setLimit: any;
}

export interface SearchManufacturerProps{
    selected: string;
    setSelected: () => void
}

export interface SearchBarProps{
    setManufacturer: (param: string) => void
    setModel: (param: string) => void
}