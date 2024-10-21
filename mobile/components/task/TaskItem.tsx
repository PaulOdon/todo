import { TaskDTO } from "@/data/dto/Task.dto";
import { EnumTaskStatus } from "@/data/enum/EnumTaskItem";
import { useTaskMngt } from "@/hooks/useTaskMngt";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type TaskItemProps = {
  task?: TaskDTO;
  onEdit: (task: TaskDTO, isToComplete: boolean) => void;
  onDelete: (id: number) => void;
};

export default function TaskItem({ task, onEdit, onDelete }: TaskItemProps) {
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
        minWidth: 400,
        padding: 16,
      }}
    >
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          borderColor:
            task?.status === EnumTaskStatus.COMPLETED ? "green" : "#333",
          borderWidth: task?.status === EnumTaskStatus.COMPLETED ? 2 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
        }}
        onPress={() => onEdit(task as TaskDTO, true)}
      >
        {task?.status === EnumTaskStatus.COMPLETED && (
          <Ionicons size={16} name="checkmark" color={"green"} />
        )}
      </TouchableOpacity>
      <View style={{ display: "flex", gap: 4, width: "80%" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textDecorationLine:
              task?.status === EnumTaskStatus.COMPLETED
                ? "line-through"
                : "none",
          }}
        >
          {task?.name ?? "Task title"}
        </Text>
        <Text>{task?.description ?? "Task description"}</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => onEdit(task as TaskDTO, false)}>
          <Ionicons size={16} name={"pencil"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task?.id as number)}>
          <Ionicons size={16} name={"close-circle-outline"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
