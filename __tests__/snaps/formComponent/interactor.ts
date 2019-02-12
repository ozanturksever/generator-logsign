import { interactor, isPresent } from "@bigtest/interactor";

@interactor
class XxxInteractor {
  public isExists = isPresent("[data-test-form]");
}
export default XxxInteractor;
