import json

def lambda_handler(event, context):
    """Sample pure Lambda function

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "hello1 world 1",
            # "location": ip.text.replace("\n", "")
        }),
    }
