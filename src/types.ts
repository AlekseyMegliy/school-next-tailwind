export type Teacher = {
  img?: string;
  name: string;
  prof?: string;
  desc: string;
};

export type Service = {
  header: string;
  secondHeader: string;
  firstServ: string;
  secondServ: string;
  sale: string;
};

export type Feedback = string[];

export type Data = {
  teachers: Teacher[];
  sevice: Service[];
  feedback: Feedback;
};
