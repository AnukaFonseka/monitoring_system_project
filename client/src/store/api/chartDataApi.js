import { api } from './api';

export const chartDataApi = api.injectEndpoints({
  reducerPath: "chartDataApi",
  endpoints: (build) => ({
    getChartData: build.query({
      query: () => "dataValues/getDataValues",
    }),
  }),
});

export const { useGetChartDataQuery } = chartDataApi;
