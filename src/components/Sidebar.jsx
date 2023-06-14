import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        overflowY: "auto",
      }}
    >
      {categories.map((category) => {
        const isSelected = category.name === selectedCategory;
        return (
          <button
            className='category-btn'
            style={{ background: isSelected && "#FC1503", color: "white" }}
            key={category.name}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
          >
            <span
              style={{ color: !isSelected && "#FC1503", marginRight: "15px" }}
            >
              {category.icon}
            </span>
            <span style={{ opacity: !isSelected && 0.8 }}>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
