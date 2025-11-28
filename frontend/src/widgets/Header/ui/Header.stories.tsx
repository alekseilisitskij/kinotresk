import React from "react";
import Header from "./Header";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Widgets/Header",
  component: Header,
} as Meta;

const Template: StoryFn = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
