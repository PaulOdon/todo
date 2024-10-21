import { EnumTaskStatus } from "../enum/EnumTaskItem";

export interface TaskDTO {
  id?: number;
  name?: string;
  description?: string;
  status?: EnumTaskStatus;
}
