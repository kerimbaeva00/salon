import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import "./Filter.css";
import { yellow } from "@mui/material/colors";

const color = yellow[600];

function Filter({ type, setType, price, setPrice }) {
  return (
    <div className="slider__filter">
      <FormControl className="slider">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel
            value="Парикмахерские услуги"
            control={<Radio />}
            label="Парикмахерские услуги"
          />
          <FormControlLabel
            value="Ногтевой сервис"
            control={<Radio />}
            label="Ногтевой сервис"
          />
          <FormControlLabel value="Визаж" control={<Radio />} label="Визаж" />
          <FormControlLabel
            value="Лазерная эпиляция"
            control={<Radio />}
            label="Лазерная эпиляция"
          />
          <FormControlLabel
            value="Солярий"
            control={<Radio />}
            label="Солярий"
          />
        </RadioGroup>
      </FormControl>
      <Box sx={{ width: 285 }}>
        <FormLabel id="demo-radio-buttons-group-label">По ценам</FormLabel>
        <Slider
          sx={{ color: color }}
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          min={0}
          max={1000}
        />
      </Box>
    </div>
  );
}

export default Filter;
