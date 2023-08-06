import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'tremothegoat',
    database: 'bloguser',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};

export default typeOrmConfig;
