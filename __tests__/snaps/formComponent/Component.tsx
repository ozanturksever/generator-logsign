import * as React from "react";
import { Button, Flex } from "logsign-components";
import { Form, FormItem, Input, Label } from "logsign-forms";

export interface IXxxProps {
  onValidSubmit: (model) => {};
}

export interface IFormRefProps {
  getModel: () => {};
}

export default class Xxx extends React.Component<
  IXxxProps,
  {}
  > {
  private readonly form: React.RefObject<IFormRefProps>;

  public constructor(props: IXxxProps) {
    super(props);
    this.form = React.createRef();
  }

  public render() {
    return (
      <Form
        data-test-form
        onValidSubmit={this.onValidSubmit}
        innerRef={this.form}
      >
        <FormItem>
          <Label>title</Label>
          <Input name="title" required />
        </FormItem>

        <FormItem>
          <Button data-test-save-button type="primary" htmlType="submit">
            save
          </Button>
        </FormItem>
      </Form>
    );
  }

  private onValidSubmit = () => {
    const model = this.form.current.getModel();
    const { onValidSubmit } = this.props;
    onValidSubmit(model);
  };
}
