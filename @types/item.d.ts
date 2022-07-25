export interface IItem {
  mission_name: string;
  flight_number: number;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  };
}
