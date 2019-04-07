export const getStatus = (request) => {
  if (!request) {
    return '-';
  }
  if (request.isApproved) {
    return 'Выполнена';
  }
  if (!request.isFinishedByCustomer && request.isFinishedByContractor) {
    return 'Завершена подрядчиком';
  }
  if (request.isFinishedByCustomer) {
    return 'Ожидает проверки';
  }
  if (request.contractorId) {
    return 'В работе';
  }
  return 'Новая';
};

export const getType = (request) => {
  if (!request) {
    return '-';
  }
  switch (request.type) {
    case 'technologyConnection':
      return 'Технологическое присоединение';
    case 'technologyConnectionByTimeScheme':
      return 'Технологическое присоединение по временной схеме';
    case 'technologyConnectionByTimeScheme':
      return 'Технологическое присоединение посредством перераспределения максимальной мощности';
    case 'technologyConnectionByTimeScheme':
      return 'Восстановление (переоформление) документов';
    default:
      return '-';
  }
};
