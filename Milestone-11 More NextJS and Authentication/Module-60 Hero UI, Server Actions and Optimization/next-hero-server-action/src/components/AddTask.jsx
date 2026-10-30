"use client";
import { ListCheck } from '@gravity-ui/icons';
import {
    Button, Calendar, DateField, DatePicker, Description, FieldError,
    Input, Label, ListBox,
    Modal, Select, Surface, TextArea,
    TextField
} from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";

const AddTask = ({ createATask }) => {

    const [value, setValue] = useState("");
    const [dueDate, setDueDate] = useState(null);
    const currentDate = today(getLocalTimeZone());

    const [isOpen, setIsOpen] = useState(false);

    const handleAction = async (formData) => {
        await createATask(formData);
        setIsOpen(false);   // close only after the data is sent
        setValue("");
        setDueDate(null);
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button variant="tertiary">Add a Task</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header className="flex flex-row items-center gap-3">
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <ListCheck className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Create a Task</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={handleAction} className="flex flex-col gap-4">

                                    <TextField className="w-full" name="title" type="text" variant="secondary" isRequired validationBehavior="native">
                                        <Label>Title</Label>
                                        <Input placeholder="Enter your task name" />
                                    </TextField>

                                    <TextField className="w-full" name="description" variant="secondary" isRequired validationBehavior="native">
                                        <Label>Description</Label>
                                        <TextArea
                                            className="w-full resize-none"
                                            placeholder="Write a description..."
                                            rows={4}
                                            maxLength={280}
                                            onChange={(event) => setValue(event.target.value)}
                                        />
                                        <Description>Characters: {value.length} / 280</Description>
                                    </TextField>

                                    <Select className="w-full" name="category" placeholder="Select Category" variant="secondary" isRequired validationBehavior="native">
                                        <Label>Category</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="career" textValue="Career">
                                                    Career
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="development" textValue="Development">
                                                    Development
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="learning" textValue="Learning">
                                                    Learning
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="personal" textValue="Personal">
                                                    Personal
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>


                                    <Select className="w-full" name="priority" placeholder="Select Priority" variant="secondary" isRequired validationBehavior="native">
                                        <Label>Priority</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="low" textValue="Low">
                                                    Low
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="medium" textValue="Medium">
                                                    Medium
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="high" textValue="High">
                                                    High
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>


                                    <Select className="w-full" name="status" placeholder="Select Status" variant="secondary" isRequired validationBehavior="native">
                                        <Label>Status</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="pending" textValue="Pending">
                                                    Pending
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="in progress" textValue="In Progress">
                                                    In Progress
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="completed" textValue="Completed">
                                                    Completed
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>


                                    <DatePicker
                                        isRequired
                                        validationBehavior="native"
                                        className="w-full"
                                        minValue={currentDate}
                                        name="dueDate"
                                        value={dueDate}
                                        onChange={setDueDate}
                                    >
                                        <Label>Due Date</Label>

                                        <DateField.Group fullWidth variant="secondary">
                                            <DateField.Input>
                                                {(segment) => <DateField.Segment segment={segment} />}
                                            </DateField.Input>

                                            <DateField.Suffix>
                                                <DatePicker.Trigger>
                                                    <DatePicker.TriggerIndicator />
                                                </DatePicker.Trigger>
                                            </DateField.Suffix>
                                        </DateField.Group>

                                        <FieldError>Due date must be today or in the future.</FieldError>

                                        <DatePicker.Popover>
                                            <Calendar aria-label="Due date">
                                                <Calendar.Header>
                                                    <Calendar.YearPickerTrigger>
                                                        <Calendar.YearPickerTriggerHeading />
                                                        <Calendar.YearPickerTriggerIndicator />
                                                    </Calendar.YearPickerTrigger>
                                                    <Calendar.NavButton slot="previous" />
                                                    <Calendar.NavButton slot="next" />
                                                </Calendar.Header>

                                                <Calendar.Grid>
                                                    <Calendar.GridHeader>
                                                        {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                                    </Calendar.GridHeader>
                                                    <Calendar.GridBody>
                                                        {(date) => <Calendar.Cell date={date} />}
                                                    </Calendar.GridBody>
                                                </Calendar.Grid>

                                                <Calendar.YearPickerGrid>
                                                    <Calendar.YearPickerGridBody>
                                                        {({ year }) => <Calendar.YearPickerCell year={year} />}
                                                    </Calendar.YearPickerGridBody>
                                                </Calendar.YearPickerGrid>
                                            </Calendar>
                                        </DatePicker.Popover>
                                    </DatePicker>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type='submit'>Submit Task</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddTask;