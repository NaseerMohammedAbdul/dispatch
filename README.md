# Workflow call with Issue-Comment 

CI -> this workflow creates a Issue Comments with desired command 

Dispatch -> this workflow gets triggered when a comment is created on a issue. then it will call the deploy command workflow. 

deploy-command -> this is regular deploy workflow with additional ON Issue Comment registered. All the input params will be pass with the dispatch workflow. 


### CI -> create a comment -> triggers Dispatch Workflow -> call the Deploy command workflow -> extracts the input variables from the <I>github.event.client_payload.slash_command.args.named</I>
