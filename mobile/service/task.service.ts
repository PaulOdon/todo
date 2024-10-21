import useAxios from "@/hooks/useAxios";
import { TaskDTO } from "@/data/dto/Task.dto";
import { BASE_URL } from "@/constants/URL";

export const taskService = () => {
  const { get, post, patch, remove } = useAxios();
  const baseUrl = BASE_URL + "/task";

  const fetchAll = async (): Promise<TaskDTO[]> => {
    try {
      return await get(baseUrl);
    } catch (error) {
      throw new Error("Erreur lors de la récupération des tâches.");
    }
  };

  const createOne = async (data: TaskDTO): Promise<TaskDTO> => {
    try {
      return await post(baseUrl, data);
    } catch (error) {
      throw new Error("Erreur lors de la création de la tâche.");
    }
  };

  const updateOne = async (data: TaskDTO): Promise<TaskDTO> => {
    try {
      if (!data.id) throw new Error("L'ID de la tâche est requis.");
      return await patch(`${baseUrl}/${data.id}`, data);
    } catch (error) {
      throw new Error("Erreur lors de la mise à jour de la tâche.");
    }
  };

  const deleteOne = async (id: number): Promise<void> => {
    try {
      return await remove(`${baseUrl}/${id}`);
    } catch (error) {
      throw new Error("Erreur lors de la suppression de la tâche.");
    }
  };

  return {
    fetchAll,
    createOne,
    updateOne,
    deleteOne,
  };
};
