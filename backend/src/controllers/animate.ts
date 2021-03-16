import { Controller } from "./base";
import { AnimateType, CommonType } from "@/types";
import { actions } from "@/models";
import { equals } from "ramda";

interface StateType {
  loading: boolean;
  select: string[];
  query: CommonType.ListQuery;
}

export class AnimateController extends Controller<StateType> {
  set = (value: Partial<CommonType.ListQuery>) => {
    const { state } = this;

    const difference = Object.entries(value).some(item =>
      equals(state.query[item[0] as keyof CommonType.ListQuery], item[1])
    );

    if (!difference) return;
    state.query = {
      ...state.query,
      ...value,
    };
  };

  init = async () => {
    const { state } = this;
    state.loading = true;
    await actions.animate.queryList(state.query).finally(() => (state.loading = false));
    state.select = [];
  };

  update = async (values: AnimateType.UpdateItemReq) => {
    await actions.animate.updateItem({ ...values });
    this.init();
  };

  updateMany = async (values: Partial<AnimateType.UpdateItemReq>) => {
    const { select } = this.state;
    await actions.animate.updateList({ ids: select, ...values });
    this.init();
  };

  remove = async (id: string) => {
    await actions.animate.deleteItem({ id });
    this.init();
  };

  removeMany = async () => {
    const { select } = this.state;
    await actions.animate.deleteList({ ids: select });
    this.init();
  };

  reset = () => this.set(this.initialState.query);
}
