import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define a thunk to fetch data from API for a given city
export const fetchCityData = createAsyncThunk(
  "city/fetchCityData",
  async (cityName) => {
    // Perform API call to fetch data for the city
    const response = await fetch(
      `https://corsproxy.org/?https%3A%2F%2Fpositionstack.com%2Fgeo_api.php%3Fquery%3D${cityName}`
    );
    const data = await response.json();
    return data;
  }
);

export const citySlice = createSlice({
  name: "city",
  initialState: {
    lat: 30.728092,
    lng: 76.7784,
    currCity: "Chandigarh",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Automatically handles pending, fulfilled, and rejected actions
      .addCase(fetchCityData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCityData.fulfilled, (state, action) => {
        state.loading = false;
        state.lat = action.payload.data[0].latitude;
        state.lng = action.payload.data[0].longitude;
        state.currCity = action.payload.data[0].city;
      })
      .addCase(fetchCityData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default citySlice.reducer;
