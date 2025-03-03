import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'select' }
    }
} satisfies Meta<typeof MyLabel>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Basic Label',
        size: 'h2'
    }
}

export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        size: 'h2',
        allCaps: true
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        size: 'h2',
        color: 'secondary'
    }
}

export const CustomColors: Story = {
    args: {
        label: 'Custom Colors Label',
        size: 'h2',
        fontColor: 'blue'
    }
}