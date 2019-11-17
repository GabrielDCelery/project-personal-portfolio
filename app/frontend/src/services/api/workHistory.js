class WorkHistory {
  async getList() {
    return [
      {
        companyName: 'AUTOLOGYX LLC',
        position: 'Full Stack Developer',
        aboutTheCompany:
          'Autologyx provides process automation for complex operations in the compliance and legal sector.',
        workSummary:
          'My role included maintaining the company’s internal administrative web applications and public websites. Provided support to the company’s clientele in both green-and brownfield projects from tender through to completion.',
        keyResponsibilities: [
          'Created new- and extended existing modules to automate tasks and scheduled processes',
          'Built RESTful APIs for applications collecting and processing survey data'
        ]
      },
      {
        companyName: 'ARKENFORD LLC',
        position: 'Junior Web Developer',
        aboutTheCompany:
          'Autologyx provides process automation for complex operations in the compliance and legal sector.',
        workSummary:
          'My role included maintaining the company’s internal administrative web applications and public websites. Provided support to the company’s clientele in both green-and brownfield projects from tender through to completion.',
        keyResponsibilities: [
          'Created new- and extended existing modules to automate tasks and scheduled processes',
          'Built RESTful APIs for applications collecting and processing survey data'
        ]
      }
    ];
  }
}

export default new WorkHistory();
