import { ILoginFormData } from "../stores/store";

export enum FileActionTypes {
  UPDATE = "UPDATE"
}

export interface IUpdateFilesAction { type: FileActionTypes.UPDATE; data: string[]; }

export type FileActions =
IUpdateFilesAction;
