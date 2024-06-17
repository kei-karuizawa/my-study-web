// 4-4：Enum 枚举类型

const Status = {
  OFFLINE: 0,
  ONLINE: 1,
  DELETED: 2,
}

enum StatusEnum {
  OFFLINE,
  ONLINE,
  DELETED,
}

// 相互映射。这里的 0 代表的是枚举的值，而不是序号 0。
console.log(StatusEnum.OFFLINE, StatusEnum[0]);

function getResult(status: any) {
  if (status === Status.OFFLINE) {
    return 'Status.OFFLINE';
  } else if (status === Status.ONLINE) {
    return 'Status.ONLINE';
  } else if (status === Status.DELETED) {
    return 'Status.DELETED';
  } else {
    return 'error';
  }
}

function getResult2(status: StatusEnum) {
  if (status === Status.OFFLINE) {
    return 'Status.OFFLINE';
  } else if (status === Status.ONLINE) {
    return 'Status.ONLINE';
  } else if (status === Status.DELETED) {
    return 'Status.DELETED';
  } else {
    return 'error';
  }
}
