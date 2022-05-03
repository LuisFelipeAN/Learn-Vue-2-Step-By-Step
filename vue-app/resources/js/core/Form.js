import Errors from "./Errors";
class Form{
    constructor(data){
        this.originalData=data
        for(let field in data){
            this[field]=data[field];
        }
        this.errors= new Errors();
    }
    reset(){
        for(let field in this.originalData){
            this[field]='';
        }
        this.errors.clear();

    }

    data(){
        let data={};
        for(let property in this.originalData){
            data[property]=this[property];
        }
        return data;
    }

    submit(reuquestType,url){
        return new Promise((resolve,reject)=>{
            axios[reuquestType](url,this.data())
            .then(response=>{
                this.onSuccess(response.data);
                resolve(response.data);
            })
            .catch(error=>{
                this.onFail(error.response.data);
                reject(error.response.data);
            });
        })
    }

    onSuccess(data){
        alert(data.message);
        this.reset();
    }
    onFail(data){
        this.errors.record(data.errors);
    }
}

export default Form;