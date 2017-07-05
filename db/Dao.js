import { SQLite } from 'expo';

const db = SQLite.openDatabase({name:'fugitives.db'})

export default class Dao {

    static initDB = () => new Promise((resolve, reject) => 
        db.transaction(tx => 
            tx.executeSql(`create table if not exists fugitives (
                id integer primary key autoincrement,
                name text not null,
                photo text,
                captured integer, 
                capturedLong real,
                capturedLat real)`, [], resolve, reject)
        , reject)
    )

    static addFugitive = (name) => new Promise((resolve, reject) => 
        db.transaction(tx => 
            tx.executeSql('insert into fugitives (name, captured) values (?, 0)', [name], resolve, reject)
        , reject)
    )

    static listFugitives = (captured) => new Promise((resolve, reject) => 
        db.transaction(tx => 
            tx.executeSql('select * from fugitives where captured = ?', [captured], (_, {rows})=>resolve(rows._array), reject)
        , reject)
    )

}