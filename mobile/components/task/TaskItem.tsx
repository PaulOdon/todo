import { TaskDTO } from "@/data/dto/Task.dto";
import { EnumTaskStatus } from "@/data/enum/EnumTaskItem";
import { useTaskMngt } from "@/hooks/useTaskMngt";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type TaskItemProps = {
  task?: TaskDTO;
  onEdit: (task: TaskDTO) => void;
  onDelete: (id: number) => void;
};

export default function TaskItem({ task, onEdit, onDelete }: TaskItemProps) {
  const { updateOneTask } = useTaskMngt();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 16,
        backgroundColor:
          task?.status === EnumTaskStatus.COMPLETED ? "#ddffdd" : "#FFFFFF",
        minWidth: 300,
        padding: 16,
      }}
    >
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          borderColor: "#333",
          borderWidth: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        }}
        onPress={() => {
          updateOneTask({
            ...task,
            status: EnumTaskStatus.COMPLETED,
          });
        }}
      >
        {task?.status === EnumTaskStatus.COMPLETED && (
          <Ionicons size={16} name="checkmark" />
        )}
      </TouchableOpacity>
      <View style={{ display: "flex", gap: 4, width: "80%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {task?.name ?? "Task title"}
        </Text>
        <Text>{task?.description ?? "Task description"}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => onEdit(task as TaskDTO)}>
          <Ionicons size={16} name={"pencil"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task?.id as number)}>
          <Ionicons size={16} name={"close-circle-outline"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
