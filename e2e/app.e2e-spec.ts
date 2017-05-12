import { TasksAppPage } from './app.po';

describe('tasks-app App', () => {
  let page: TasksAppPage;

  beforeEach(() => {
    page = new TasksAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
