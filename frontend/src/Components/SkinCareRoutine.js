import React from "react";
import {
  Card as MuiCard,
  CardHeader,
  CardContent as MuiCardContent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  normalSkinContent,
  combinationSkinContent,
  drySkinContent,
  oilySkinContent,
  sensitiveSkinContent,
} from "../values";

const Card = styled(MuiCard)(({ theme }) => ({
  width: "100%",
  maxWidth: 800,
  margin: "0 auto",
  backgroundColor: "#fff", // Ensures the background is white
  boxShadow: theme.shadows[3], // Adding some shadow for visual distinction
}));

const CardContent = styled(MuiCardContent)(({ theme }) => ({
  fontSize: 16,
  lineHeight: 1.6,
  color: "#333", // Ensures dark text color for better contrast
  "& h3": {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
    color: "#222", // Specific color for headers
  },
  "& p": {
    marginBottom: 16,
  },
  "& ul": {
    listStyleType: "disc",
    paddingLeft: 20,
    marginBottom: 16,
    "& li": {
      marginBottom: 8,
    },
  },
}));

const SkinCareRoutine = ({ skinType }) => {
  const getSkinCareRoutine = () => {
    switch (skinType) {
      case "normal":
        return {
          title: "Normal Skin Type",
          content: normalSkinContent,
        };
      case "dry":
        return {
          title: "Dry Skin Type",
          content: drySkinContent,
        };
      case "oily":
        return {
          title: "Oily Skin Type",
          content: oilySkinContent,
        };
      case "combination":
        return {
          title: "Combination Skin Type",
          content: combinationSkinContent,
        };
      case "sensitive":
        return {
          title: "Sensitive Skin Type",
          content: sensitiveSkinContent,
        };
      default:
        return null;
    }
  };

  const { title, content } = getSkinCareRoutine() || {};

  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default SkinCareRoutine;
