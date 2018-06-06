import { ProjectsPage } from './projects.po';
describe('Projects', function() {
  let page: ProjectsPage;
  let expectedHeader = 'Home';

  beforeEach(function() {
    page = new ProjectsPage();
  });

  it('should have projects', () => {
    page.navigateTo();
    expect(page.projectNameHeaders.count()).toEqual(6);
  });

  describe('when editing', () => {
    beforeEach(() => {
      page.navigateTo();
      page.actionsButton.click();
      page.editButton.click();
    });

    it('should show a form', () => {
      expect(page.projectForm.isPresent()).toEqual(true);
    });

    it('should save updated project name', () => {
      const updatedName = 'updated project name';
      page.updateName(updatedName);
      page.saveButton.click();
      expect(page.firstProjectHeader.getText()).toEqual(updatedName);
    });
  });
});
