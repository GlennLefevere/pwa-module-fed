export interface Flight {
  scheduled_time: Date;
  best_known_time?: Date;
  companions: unknown[];
  via: unknown[];
  id: string;
  carrier_name: string;
  location: { name: string, iata: string };
  state: string;
  last_modified: Date;
  carrier_flight_number: string;
}
