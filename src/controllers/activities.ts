import { Request, Response } from 'express';

function get(req: Request, res: Response) {
  let activity = {
    title: "Campfire pancakes",
    updated: new Date(),
    contributors: [
      "Max Bell", 
      "Alex North"
    ],
    image: "",
    alt: "1st Ivybridge Victoria Scout Troop cooking sausages in the woods",
    description: "In patrols, Scouts build small cooking fires in the woods which they use to cook pancakes on.",
    instructions: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Aliquam tincidunt mauris eu risus.",
      "Vestibulum auctor dapibus neque.",
      "Nunc dignissim risus id metus.",
      "Cras ornare tristique elit.",
      "Vivamus vestibulum ntulla nec ante.",
      "Praesent placerat risus quis eros.",
      "Fusce pellentesque suscipit nibh.",
      "Integer vitae libero ac risus egestas placerat.",
      "Vestibulum commodo felis quis tortor.",
      "Ut aliquam sollicitudin leo.",
      "Cras iaculis ultricies nulla.",
      "Donec quis dui at dolor tempor interdum."
    ],
    equipment: [
      {name: "Broom handles", quantity: 5, per: "scout"},
      {name: "Bean bags", quantity: 1, per: "scout"},
      {name: "meters of tape", quantity: 4, per: "patrol"},
      {name: "bandages", quantity: 2, per: "troop"},
      {name: "regrets", quantity: 7, per: "patrol"}
    ],
    riskAssessment: null
  };
  res.status(200).json(activity)
}

function create(req: Request, res: Response) {
}

function update(req: Request, res: Response) {
}

function remove(req: Request, res: Response) {
}

function search(req: Request, res: Response) {
}

export {
  get,
  create,
  update,
  remove,
  search
};