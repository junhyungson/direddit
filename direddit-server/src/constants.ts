export const __prod__ =
  process.env.NODE_ENV !== process.env.MIKRO_ORM_PRODUCTION;
export const __POSTGRESPW__ = process.env.MIKRO_ORM_PASSWORD;
export const __POSTGRESUSER__ = process.env.MIKRO_ORM_USER;
export const __POSTGRESDBNAME__ = process.env.MIKRO_ORM_DB_NAME;
export const __MIKRO_ORM_TYPE__ = process.env.MIKRO_ORM_TYPE;
