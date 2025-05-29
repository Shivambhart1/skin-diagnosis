import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  normalSkinContent,
  combinationSkinContent,
  drySkinContent,
  oilySkinContent,
  sensitiveSkinContent,
} from "../values";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 800,
  margin: "20px auto",
  backgroundColor: "#fff",
  boxShadow: theme.shadows[3],
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  fontSize: 16,
  lineHeight: 1.6,
  color: "#333",
  "& h3": {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
    color: "#222",
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

const SkinCareRoutineSelector = () => {
  const [selectedSkinType, setSelectedSkinType] = useState("");
  const [routineDetails, setRoutineDetails] = useState(null);

  const skinTypes = [
    { value: "normal", label: "Normal Skin" },
    { value: "dry", label: "Dry Skin" },
    { value: "oily", label: "Oily Skin" },
    { value: "combination", label: "Combination Skin" },
    { value: "sensitive", label: "Sensitive Skin" },
  ];

  const getSkinCareRoutine = (skinType) => {
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

  const handleSkinTypeChange = (event) => {
    const skinType = event.target.value;
    setSelectedSkinType(skinType);
    setRoutineDetails(getSkinCareRoutine(skinType));
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 800, margin: "auto" }}>
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Select Your Skin Type</InputLabel>
          <Select
            value={selectedSkinType}
            onChange={handleSkinTypeChange}
            label="Select Your Skin Type"
          >
            {skinTypes.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {routineDetails && (
        <StyledCard>
          <CardHeader title={routineDetails.title} />
          <StyledCardContent>{routineDetails.content}</StyledCardContent>
        </StyledCard>
      )}
    </Box>
  );
};

export default SkinCareRoutineSelector;
