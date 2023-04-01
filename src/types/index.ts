export type Job = {
  contract_type: string;
  location: {
    display_name: string;
    area: string[];
    __CLASS__: string;
  };
  created: string;
  salary_min: number;
  redirect_url: string;
  adref: string;
  id: string;
  salary_max: number;
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  category: {
    __CLASS__: string;
    label: string;
    tag: string;
  };
  salary_is_predicted: string;
  company?: {
    __CLASS__: string;
    display_name: string;
  };
  __CLASS__: string;
};

export type JobsRes = {
  __CLASS__: string;
  count: number;
  mean: number;
  results: Job[];
};
