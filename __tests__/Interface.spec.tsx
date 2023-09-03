import { render } from "@testing-library/react";
import { Interface } from "../src/components/UI/Interface";

class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-ignore
global.IntersectionObserver = IntersectionObserver;

describe("Home elements should be rendered", () => {
  test("greetings should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const greetings1 = getByText("👋 OLÁ, EU SOU");
    const greetings2 = getByText("RYAN HENRIQUE");
    expect(greetings1).toBeInTheDocument();
    expect(greetings2).toBeInTheDocument();
  });

  test("Title should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const title1 = getByText("DESENVOLVEDOR");
    const title2 = getByText("WEB");
    const title3 = getByText("FRONT-END");
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
  });

  test("input color should be in the screen", () => {
    const { getByTestId } = render(<Interface />);
    const inputColor = getByTestId("input-color");
    expect(inputColor).toBeInTheDocument();
  });

  test("about should be in the screen", () => {
    const { getByTestId } = render(<Interface />);
    const about = getByTestId("about1");
    const about2 = getByTestId("about2");
    expect(about).toBeInTheDocument();
    expect(about2).toBeInTheDocument();
  });

  test("buttons should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const buttonGithub = getByText("VIEW MY GITHUB");
    const buttonLinkedin = getByText("VIEW MY LINKEDIN");
    expect(buttonGithub).toBeInTheDocument();
    expect(buttonLinkedin).toBeInTheDocument();
  });
  test("like button should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const likeButton = getByText("432 LIKES");
    expect(likeButton).toBeInTheDocument();
  });
});

describe("Skill elements should be rendered", () => {
  test("greetings should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const skills = getByText("HABILIDADES");
    expect(skills).toBeInTheDocument();
  });
  test("greetings should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const lang = getByText("LÍNGUAS");
    expect(lang).toBeInTheDocument();
  });
});
