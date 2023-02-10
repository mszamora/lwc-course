public with sharing class Exercise27Controller {
    @AuraEnabled(cacheable=true)
    public static list<account> getAccounts(String accountSource) {
        try {

            String queryAccountSource = '%'+AccountSource+'%';

            List<Account> accounts = [SELECT ID, Name FROM Account WHERE AccountSource like :queryAccountSource];

            return accounts;

        } catch (Exception e) {

            throw new AuraHandledException(e.getMessage());
            
        }
    }

    @AuraEnabled(cacheable=false)
    public static list<account> getAccountsImperative(String accountSource) {
        try {
       
            String queryAccountSource = '%'+AccountSource+'%';
            
            List<Account> accounts = [SELECT ID, Name FROM Account WHERE AccountSource like :queryAccountSource];

            return accounts;
 
        } catch (Exception e) {

            throw new AuraHandledException(e.getMessage());

        }
    }
}