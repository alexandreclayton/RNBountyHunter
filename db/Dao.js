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
                capturedLat real)`, [],  (_, result) => resolve(result), (_, error) =>reject(error))
        , reject)
    )

    static addFugitive = (name) => new Promise((resolve, reject) => 
        db.transaction(tx => 
            tx.executeSql('insert into fugitives (name, captured) values (?, 0)', [name], (_, {rows}) => resolve(rows._array), (_, error) =>reject(error))
        , reject)
    )

    static listFugitives = (captured) => new Promise((resolve, reject) => 
        db.transaction(tx => 
            tx.executeSql('select * from fugitives where captured = ?', [captured], (_, {rows}) => resolve(rows._array), (_, error) =>reject(error))
        , reject)
    )

    static addFugitivePhoto = (id, uri) => new Promise((resolve, reject) => 
        db.transaction(tx => 
            tx.executeSql('update fugitives set photo=? where id=?', [uri, id], (_, {rows}) => resolve(rows._array), (_, error) =>reject(error))
        , reject)
    )

    static removeFugitive = (id) => new Promise((resolve, reject) => 
        db.transaction(tx => 
            tx.executeSql('delete from fugitives where id=?', [id], (_, {rows}) => resolve(rows._array), (_, error) =>reject(error))
        , reject)
    )

    static captureFugitive = (id, latitude, longitude) => new Promise((resolve, reject) => 
        db.transaction(tx => 
            tx.executeSql('update fugitives set captured=1, capturedLat=?, capturedLong=? where id=?', 
                [latitude, longitude, id], (_, {rows}) => resolve(rows._array), (_, error) =>reject(error))
        , reject)
    )

}